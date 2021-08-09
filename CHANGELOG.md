# DiceGame ChangeLog

Change Log file for the dacade [Celo Development 101](https://dacade.org/communities/celo-development-101) dApp submission by [mdavidson](https://dacade.org/communities/celo-development-101/submissions/afbc936e-1191-4d3f-bb3c-0064cc1e100d).

**```Keywords```**

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for soon-to-be removed features.
* `Removed` for now removed features.
* `Fixed` for any bug fixes.
* `Security` in case of vulnerabilities.

## [emmanuelJet](https://github.com/emmanuelJet) - 2021-08-07

**Contract Review:** I optimized the contract code by updating the current structure and including new functions in a new contract file and its abi.json code in another file. I started by removing the unused `balances` mapping then I changed the `Game` event to `GameRecord`. This change brought about the introduction of two structs and an enum for the purpose of tracking the contract activities (Record struct, Transaction struct, and TransType enum). These structs and enum help to save a dice betting game record and the moderator activities of removing and adding cUSD token to the contract. Yes, I included functions and event to help the game moderator deposit and withdraw cUSD tokens from the contract (Trans event, depositToken function, and withdrawToken function). These new functions and event assisted me to include other functions to get game records, transactions, and contract balance (getRecord, getTrans, and vaultBalance function). With all this, in other to remove duplicate methods I include some internal functions to assist the contract in a way or the other (checkBalance, depositcUSD, withdrawcUSD, and processGame functions). **DApp Review:** I added a GitHub Workflow script to automatically build and deploy the dApp using GitHub Pages instead of using the *Heroku platform* for deployment. **Design Review:** The UI is simple and great but the UX needs a little guide to playing the game. I didn't understand how the betting works till i saw the contract. The game is simple and after understanding, it's fun to play. Nice work!

### Added

* Contract with its JSON abi files
* build_and_deploy.yml file
* .editorconfig file
* CHANGELOG.md file
