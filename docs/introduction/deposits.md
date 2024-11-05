# Deposits

Before users can transact with tokens on the Wire network, their tokens must be ‘shadowed’ from the origin chain. Shadowing, also known as token wrapping, is creating a digital representation of a token from one blockchain on another. For example, Ethereum (ETH) on the Wire Network is represented as Wrapped Ethereum (WETH) to enable its use within that specific ecosystem.
The deposit process involves *transferring the ownership of the tokens to a special escrow contract*, where they are held until the eventual recipient decides to claim them. This contract serves as the foundational mechanism for managing the *deposit root*, which is essential for tracking and verifying the deposits within the network.

## Deposit Root

The deposit root is a dynamic cryptographic hash used as a cumulative verification point within the escrow account on the external chain.

- **Initialization and Update**: The deposit root is initialized with a deterministic value. Each transaction updates this root by hashing the transaction details with the existing deposit root value and incorporating a sequential identifier to ensure traceability.
- **Proof Construction**: This updating mechanism facilitates the creation of a verifiable proof that includes the initial deposit root value, detailed transaction information, and all subsequent transaction hashes.
Below is a detailed diagram of the deposit flow of operations:

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant External Chain
    participant Validator
    participant Wire Network
    User->>Wire Network: Intent to deposit
    rect rgb(255, 210, 128)
        User -> Wire Network: amount/kind of token to be deposited <br/> the current deposit root on the origin chain <br/> the user's account on the origin chain <br/> the next sequential nonce for that user's account (if applicable)
    end
    %% alt Proposed deposit is valid
    Validator->>External Chain: Verifies
    Validator->>Validator: wait for acceptance
    Validator->>Wire Network: Acceptance
    User->>External Chain: Perform deposit
    External Chain->>External Chain: on_received() 
    External Chain->>External Chain: Hash transaction details
    Note over External Chain,External Chain: - The sender (depositor)<br/>- contract address for the token<br/>- Token ID (for ERC 721 & 1155)<br/>- Amount (for ERC 20 & 1155)    
    External Chain->>External Chain: Hash with existing deposit root
    External Chain->>External Chain: Take 32 LSB from existing root<br/>Increment and update new deposit root
    External Chain->>External Chain: Write new deposit root to contract state
    External Chain-->>User: event with new deposit root
    
    User->>Wire Network: Perform 'report' transaction
    rect rgb(191, 223, 255)
        User -> Wire Network: Signed Transaction, deposit root, and chained roots
    end
    Wire Network->>Validator: Send report transaction
    Validator->>External Chain: Verify deposit
    External Chain-->>Validator: Is deposit valid?
    
    alt Deposit is valid
        Validator->>Wire Network: Emit ratification
        
    else Deposit not performed
        alt Nonce used
            Validator->>Wire Network: Write denial with transaction data
        else Nonce not used
            Validator->>External Chain: Perform signed transaction on external chain
            Validator->>Wire Network: Emit ratification
            External Chain-->>Validator: Transaction executed
            Validator->>Wire Network: Write denial showing chain <br/> from proposal deposit root not including deposit
        end
    end
```
