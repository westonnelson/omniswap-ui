# Omnichain DEX powered by LayerZero

OmniSwap is the first comprehensive Omnichain DEX powered by LayerZero cross-chain messaging technology. The protocol offers unique access to the entirety of blockchains by being built upon the most powerful messaging layer that exists in LayerZero. Using OFTs and Oapp configurations, OmniSwap aims to enable seamless cross-chain DEX functionality and a top UX for users of all levels of web3 experience.

# The project structure is as follows:

```
omniswap-ui/
│
├── public/                            # Public assets served as-is
│   ├── favicon.ico
│   ├── omniswapwhite.png
│   ├── layerzero.png
│   └── ...
│
├── src/                               # Source code for the Next.js app
│   ├── app/                           # New Next.js App Router (since v13+)
│   │   ├── layout.tsx                 # Root layout component
│   │   ├── page.tsx                   # Main page component
│   │   ├── liquidity/                 # Route for /liquidity
│   │   │   └── page.tsx               # Liquidity page component
│   │   ├── lock/                      # Route for /lock
│   │   │   └── page.tsx               # Lock page component
│   │   ├── rewards/                   # Route for /rewards
│   │   │   └── page.tsx               # Rewards page component
│   │   └── ...
│   │
│   ├── components/                    # Reusable components
│   │   ├── Header.tsx                 # Header component
│   │   ├── Footer.tsx                 # Footer component
│   │   ├── SwapForm.tsx               # Swap form component
│   │   ├── ConnectButton.tsx          # Wallet connect button (RainbowKit)
│   │   └── ...
│   │
│   ├── hooks/                         # Custom React hooks
│   │   ├── useContract.ts             # Hook for interacting with a contract
│   │   ├── useWallet.ts               # Hook for wallet interactions
│   │   └── ...
│   │
│   ├── styles/                        # CSS and TailwindCSS styles
│   │   ├── globals.css                # Global styles
│   │   └── ...
│   │
│   ├── utils/                         # Utility functions and helpers
│   │   ├── web3.ts                    # Web3 provider setup
│   │   ├── constants.ts               # App-wide constants (e.g., contract addresses)
│   │   ├── contracts/                 # ABIs for contracts
│   │   │   └── MyContractABI.json     # ABI for MyContract
│   │   └── ...
│   │
│   ├── pages/                         # Older Next.js Pages Router (if needed)
│   │   └── api/                       # API routes for server-side logic
│   │       └── ...
│   │
│   ├── environments/                  # Environment configuration files
│   │   ├── .env.development.local     # Local environment variables
│   │   ├── .env.production.local      # Production environment variables
│   │   └── ...
│   │
│   └── next.config.js                 # Next.js configuration file
│
├── tailwind.config.ts                 # TailwindCSS configuration
├── postcss.config.js                  # PostCSS configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Node.js dependencies and scripts
├── README.md                          # Project documentation
└── .gitignore                         # Files and directories to ignore in Git
```


Visit [OmniSwap](https//omniswap.network)

## Getting Started with the Omniswap codebase

1. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. Open your web browser to view the application:
 [http://localhost:3000](http://localhost:3000). The pages auto-update as you edit the files.

This project structure uses:

# App
 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Contracts

LayerZero 

## Learn More

Learn more about Next.js with the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deploy your on app on Vercel

This app is deployed using Vercel - the best way to host Next.js apps. [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out their Next + Vercel doce for more deployment information. [Next.js deployment documentation](https://nextjs.org/docs/deployment).
