// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

// CELO Token Interface
interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract DiceGame {
  // Record struct
  struct Record {
    address player;
    uint256 guess;
    uint256 stake;
    uint256 result;
    uint256 reward;
    uint256 timestamp;
  }

  // TransType enum
  enum TransType {
    Deposit,
    Withdraw
  }

  // Transaction struct
  struct Transaction {
    uint256 amount;
    uint256 timestamp;
    TransType transtype;
  }

  // moderator address
  address payable moderatorAddress;

  // number of records
  uint public recordLength = 0;

  // number of trans
  uint public transLength = 0;

  // mapping games Record
  mapping (uint => Record) internal games;

  // mapping transactions Transaction
  mapping (uint => Transaction) internal transactions;

  // CELO Token Contract Address
  address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

  event GameRecord (
    address player,
    uint256 guess,
    uint256 stake,
    uint256 result,
    uint256 reward,
    uint256 timestamp
  );

  event Trans (
    uint256 amount,
    uint256 timestamp,
    TransType transtype
  );

  constructor () {
    // Make Moderator address equals deployer address
    moderatorAddress = payable(msg.sender);
  }

  // moderator only modifier
  modifier onlyModerator() {
    require(msg.sender == moderatorAddress, "Only game moderator can call this function.");
    _;
  }
    
  function playGame(
    uint256 guessValue,
    uint256 stakeAmount
  ) public payable returns(uint256 result) {
    uint256 rewardAmount = stakeAmount * 2;
    uint256 dieRollResult = randomMod(6);

    require(checkBalance(address(this)) > rewardAmount, "Insufficient Vault Balance");
    require(depositcUSD(stakeAmount), "Insufficient Funds");

    processGame(guessValue, stakeAmount, dieRollResult, rewardAmount);

    return dieRollResult;
  }

  // get a single record from the contract
  function getRecord(uint256 _recordIndex) public view returns (
    address player,
    uint256 guess,
    uint256 stake,
    uint256 reward,
    uint256 timestamp
  ) {
    Record storage _record = games[_recordIndex];

    return (
      _record.player,
      _record.guess,
      _record.stake,
      _record.reward,
      _record.timestamp
    );
  }

  // get a single transaction from the contract
  function getTrans(uint256 _transIndex) public view returns (
    uint256 amount,
    uint256 timestamp,
    TransType transtype
  ) {
    Transaction storage _tran = transactions[_transIndex];

    return (
      _tran.amount,
      _tran.timestamp,
      _tran.transtype
    );
  }

  function depositToken(uint256 tokenAmount) onlyModerator public payable returns (uint256 amount) {
    require(depositcUSD(tokenAmount), "Insufficient Funds");

    Transaction memory newTrans = Transaction (
      tokenAmount,
      block.timestamp,
      TransType.Deposit
    );
    transactions[transLength] = newTrans;

    transLength++;

    emit Trans(
      newTrans.amount,
      newTrans.timestamp,
      newTrans.transtype
    );

    return (tokenAmount);
  }

  function withdrawToken(uint256 tokenAmount) onlyModerator public payable returns (uint256 amount) {
    require(withdrawcUSD(tokenAmount), "Transfer not successful");

    Transaction memory newTrans = Transaction (
      tokenAmount,
      block.timestamp,
      TransType.Withdraw
    );
    transactions[transLength] = newTrans;

    transLength++;

    emit Trans(
      newTrans.amount,
      newTrans.timestamp,
      newTrans.transtype
    );

    return (tokenAmount);
  }

  function vaultBalance() public view returns(uint256 amount) {
    return (address(this).balance);
  }

  function randomMod(uint mod) internal view returns(uint256) {
    // insecure method of random number generation
    // would change to chainlink
    // when available on the Celo chain
    return (uint256(keccak256(abi.encodePacked(block.timestamp,  msg.sender))) % mod) + 1;
  }

  // Checking Account CELO balance
  function checkBalance(address _account) internal view returns (uint256 balance) {
    uint256 _balance = IERC20Token(cUsdTokenAddress).balanceOf(_account);

    return (_balance);
  }

  // deposit cUSD tokens to the contract
  function depositcUSD(uint256 _amount) internal returns (bool) {
    bool _isValid = IERC20Token(cUsdTokenAddress).transferFrom(
      msg.sender,
      address(this),
      _amount
    );

    return (_isValid);
  }

  // withdraw cUSD tokens to the contract
  function withdrawcUSD(uint256 _amount) internal returns (bool) {
    bool _isValid = IERC20Token(cUsdTokenAddress).transfer(
      msg.sender,
      _amount
    );

    return (_isValid);
  }

  function processGame(
    uint256 _guess,
    uint256 _stake,
    uint256 _result,
    uint256 _reward
  ) internal {
    // if user guessed right, send them double Their stake else they loose their stake
    if(_result == _guess){
      require(withdrawcUSD(_reward), "Transfer not successful");
    }

    Record memory newRecord = Record (
      msg.sender,
      _guess,
      _stake,
      _result,
      _reward,
      block.timestamp
    );
    games[recordLength] = newRecord;

    recordLength++;

    emit GameRecord(
      newRecord.player,
      newRecord.guess,
      newRecord.stake,
      newRecord.result,
      newRecord.reward,
      newRecord.timestamp
    );
  }
}