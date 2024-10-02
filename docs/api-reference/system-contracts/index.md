# About System Contracts

The Wire blockchain platform is unique in that the features and characteristics of the blockchain built on it are flexible, that is, they can be changed, or modified completely to suit each business case requirement. Core blockchain features such as account creation and modification, token economics, node operator registration, multi-sig, etc., are implemented inside smart contracts which are deployed on the blockchain built on the Wire platform.

## Concepts

### System contracts, system accounts, priviledged accounts

At the genesis of a Wire-based blockchain, there is only one account present: `sysio`, which is the **main system account**. There are other system accounts, which are created by `sysio`, and control specific actions of the system contracts mentioned earlier.

Privileged accounts are accounts which can execute a transaction while skipping the standard authorization check. To ensure that this is not a security hole, the permission authority over these accounts is granted to `sysio.prods`.

Not all system accounts contain a system contract, but each system account has important roles in the blockchain functionality, as follows:

|Account|Priviledged|Has contract|Description|
|---|---|---|---|
|sysio|Yes|It contains the `sysio.system` contract|The main system account on an Wire based blockchain.|
|sysio.msig|Yes|It contains the `sysio.msig` contract|Allows the signing of a multi-sig transaction proposal for later execution if all required parties sign the proposal before the expiration time.|
|sysio.wrap|Yes|It contains the `sysio.wrap` contract.|Simplifies block producer superuser actions by making them more readable and easier to audit.|
|sysio.token|No|It contains the `sysio.token` contract.|Defines the structures and actions allowing users to create, issue, and manage tokens on Wire based blockchains.|
|sysio.names|No|No|The account which is holding funds from namespace auctions.|
|sysio.bpay|No|No|The account that pays the block producers for producing blocks. It assigns 0.25% of the inflation based on the amount of blocks a block producer created in the last 24 hours.|
|sysio.prods|No|No|The account representing the union of all current active block producers permissions.|
|sysio.ram|No|No|The account that keeps track of the SYS balances based on users actions of buying or selling RAM.|
|sysio.ramfee|No|No|The account that keeps track of the fees collected from users RAM trading actions: 0.5% from the value of each trade goes into this account.|
|sysio.saving|No|No|The account which holds the 4% of network inflation.|
|sysio.stake|No|No|The account that keeps track of all SYS tokens which have been staked for NET or CPU bandwidth.|
|sysio.vpay|No|No|The account that pays the block producers accordingly with the votes won. It assigns 0.75% of inflation based on the amount of votes a block producer won in the last 24 hours.|
|sysio.rex|No|No|The account that keeps track of fees and balances resulted from REX related actions execution.|

### RAM

RAM is the memory (space, storage) where the blockchain stores data. If your contract needs to store data on the blockchain, like in a database, then it can store it in the blockchain's RAM using either a multi-index table.

### CPU

CPU is processing power, the amount of CPU an account has is measured in microseconds, it is referred to as "cpu bandwidth" on the clio get account command output and represents the amount of processing time an account has at its disposal when pushing actions to a contract.

### NET

As CPU and RAM, NET is also a very important resource in Wire-based blockchains. NET is the network bandwidth measured in bytes of transactions and it is referred to as "net bandwidth" on the clio get account command. This resource like CPU must be staked so that a contract's transactions can be executed.

## System contracts defined in [wire-system-contracts](https://github.com/Wire-Network/wire-system-contracts)

1. [sysio.bios](#sysiobios-system-contract)
2. [sysio.system](#sysiosystem-system-contract)
3. [sysio.msig](#sysiomsig-system-contract)
4. [sysio.token](#sysiotoken-system-contract)
5. [sysio.wrap](#sysiowrap-system-contract)

### sysio.bios system contract

The `sysio.bios` is a minimalist system contract because it only supplies the actions that are absolutely critical to bootstrap a chain and nothing more. This allows for a chain agnostic approach to bootstrapping a chain.

The actions implemented and publicly exposed by `sysio.bios` system contract are: setpriv, setalimits, setglimits, setprods, setparams, reqauth, setabi.

|Action name|Action description|
|---|---|
|setpriv|Set privilege status for an account.|
|setalimits|Set the resource limits of an account|
|setglimits|Not implemented yet.|
|setprods|Set a new list of active producers, that is, a new producers' schedule.|
|setparams|Set the blockchain parameters.|
|reqauth|Check if an account has authorization to access the current action.|
|setabi|Set the abi for a contract identified by an account name.|

Below are listed the actions which are declared in the `sysio.bios` contract, mapped one-to-one with the **native actions**, but having no implementation at the contract level:

|Action name|Description|
|---|---|
|newaccount|Called after a new account is created. This code enforces resource-limit rules for new accounts as well as new account naming conventions.|
|updateauth|Updates the permission for an account.|
|deleteauth|Delete permission for an account.|
|linkauth|Assigns a specific action from a contract to a permission you have created.|
|unlinkauth|Assigns a specific action from a contract to a permission you have created.|
|canceldelay|Allows for cancellation of a deferred transaction.|
|onerror|Called every time an error occurs while a transaction was processed.|
|setcode|Allows for update of the contract code of an account.|

### sysio.system system contract

The `sysio.system` contract is another smart contract that Block.one provides an implementation for as a sample system contract.  It is a version of `sysio.bios` only this time it is not minimalist, it contains more elaborated structures, classes, methods, and actions needed for an Wire based blockchain core functionality:

The actions implemented and publicly exposed by the `sysio.system` system contract are presented in the table below. Just like the `sysio.bios` sample contract there are a few actions which are not implemented at the contract level (`newaccount`, `updateauth`, `deleteauth`, `linkauth`, `unlinkauth`, `canceldelay`, `onerror`, `setabi`, `setcode`), they are just declared in the contract so they will show in the contract's ABI and users will be able to push those actions to the chain via the account holding the 'sysio.system' contract, but the implementation is at the Wire Sysio core level. They are referred to as **native actions.**

|Action name|Action description|
|---|---|
|newaccount|Called after a new account is created. This code enforces resource-limits rules for new accounts as well as new account naming conventions.|
|updateauth|Updates the permission for an account.|
|deleteauth|Delete permission for an account.|
|linkauth|Assigns a specific action from a contract to a permission you have created.|
|unlinkauth|Assigns a specific action from a contract to a permission you have created.|
|canceldelay|Allows for cancellation of a deferred transaction.|
|onerror|Called every time an error occurs while a transaction was processed.|
|setabi|Allows for updates of the contract ABI of an account.|
|setcode|Allows for updates of the contract code of an account.|
|init|Initializes the system contract for a version and a symbol.|
|setram|Set the ram supply.|
|setramrate|Set the ram increase rate.|
|setparams|Set the blockchain parameters.|
|setpriv|Set privilege status for an account (turn it on/off).|
|setalimits|Set the resource limits of an account.|
|setacctram|Set the RAM limits of an account.|
|setacctnet|Set the NET limits of an account.|
|setacctcpu|Set the CPU limits of an account.|
|rmvproducer|Deactivates a producer by name, if not found asserts.|
|updtrevision|Updates the current revision.|
|bidname|Allows an account to place a bid for a name.|
|bidrefund|Allows an account to get back the amount it bid so far on a name.|
|deposit|Deposits core tokens to user REX fund.|
|withdraw|Withdraws core tokens from user REX fund.|
|buyrex|Buys REX in exchange for tokens taken out of user's REX fund by transferring core tokens from user REX fund and converting them to REX stake.|
|unstaketorex|Use staked core tokens to buy REX.|
|sellrex|Sells REX in exchange for core tokens by converting REX stake back into core tokens at current exchange rate.|
|cnclrexorder|Cancels unfilled REX sell order by owner if one exists.|
|rentcpu|Use payment to rent as many SYS tokens as possible as determined by market price and stake them for CPU for the benefit of receiver, after 30 days the rented core delegation of CPU will expire.|
|rentnet|Use payment to rent as many SYS tokens as possible as determined by market price and stake them for NET for the benefit of receiver, after 30 days the rented core delegation of NET will expire.|
|fundcpuloan|Transfers tokens from REX fund to the fund of a specific CPU loan in order to be used for loan renewal at expiry.|
|fundnetloan|Transfers tokens from REX fund to the fund of a specific NET loan in order to be used for loan renewal at expiry.|
|defcpuloan|Withdraws tokens from the fund of a specific CPU loan and adds them to the REX fund.|
|defnetloan|Withdraws tokens from the fund of a specific NET loan and adds them to the REX fund.|
|updaterex|Updates REX owner vote weight to current value of held REX tokens.|
|consolidate|Consolidates REX maturity buckets into one bucket that cannot be sold before 4 days.|
|mvtosavings|Moves a specified amount of REX to savings bucket.|
|mvfrsavings|Moves a specified amount of REX from savings bucket.|
|rexexec|Processes max CPU loans, max NET loans, and max queued sellrex orders. Action does not execute anything related to a specific user.|
|closerex|Deletes owner records from REX tables and frees used RAM. Owner must not have an outstanding REX balance.|
|buyrambytes|Increases receiver's ram in quantity of bytes provided.|
|buyram|Increases receiver's ram quota based upon current price and quantity of tokens provided.|
|sellram|Reduces quota my bytes and then performs an inline transfer of tokens to receiver based upon the average purchase price of the original quota.|
|delegatebw|Stakes SYS from the balance of one account for the benefit of another.|
|undelegatebw|Decreases the total tokens delegated by one account to another account and/or frees the memory associated with the delegation if there is nothing left to delegate.|
|refund|This action is called after the delegation-period to claim all pending unstaked tokens belonging to owner.|
|regproducer|Register producer action, indicates that a particular account wishes to become a producer.|
|unregprod|Deactivate the block producer with specified account.|
|voteproducer|Votes for a set of producers. This action updates the list of producers voted for, for given voter account.|
|regproxy|Set specified account as proxy.|
|onblock|This special action is triggered when a block is applied by the given producer and cannot be generated from any other source.|
|claimrewards|Claim block producing and vote rewards for block producer identified by an account.|

### sysio.msig system contract

The `sysio.msig` allows for the creation of proposed transactions which require authorization from a list of accounts, approval of the proposed transactions by those accounts required to approve it, and finally, it also allows the execution of the approved transactions on the blockchain.

These are the actions implemented and publicly exposed by the `sysio.msig` contract:

|Action name|Action description|
|---|---|
|propose|Creates a proposal containing one transaction.|
|approve|Approves an existing proposal.|
|unapprove|Revokes approval of an existing proposal.|
|cancel|Cancels an existing proposal.|
|exec|Allows an account to execute a proposal.|
|invalidate|Invalidate proposal.|

### sysio.token system contract

The `sysio.token` contract defines the structures and actions that allow users to create, issue, and manage tokens for Wire-based blockchains.

These are the public actions the `sysio.token` contract is implementing:

|Action name|Action description|
|---|---|
|create|Allows an account to create a token in a given supply amount.|
|issue|This action issues to an account a specific quantity of tokens.|
|open|Allows a first account to create another account with zero balance for specified token at the expense of first account.|
|close|This action is the opposite for `open` action, it closes the specified account for specified token.|
|transfer|Allows an account to transfer to another account the specified token quantity. One account is debited and the other is credited with the specified token quantity.|
|retire|This action is the opposite for `create` action.  If all validations succeed, it debits the specified amount of tokens from the total balance.|

### sysio.wrap system contract

The `sysio.wrap` system contract allows node owners to bypass authorization checks or run privileged actions with 15/21 producer approval.

It does not grant any new powers or privileges to node owners beyond what already exists in Wire-based blockchains, but provides a more straightforward method for executing important governance-related actions, such as modifying account permissions or contract code.

The only action implemented by the `sysio.wrap` system contract is the `exec` action. This action allows for execution of a transaction, which is passed to the `exec` method in the form of a packed transaction in JSON via the `trx` parameter and the `executer` account that executes the transaction. The same `executer` account will also be used to pay the RAM and CPU fees needed to execute the transaction.
