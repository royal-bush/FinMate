# FinMate

**Your AI-Powered Personal Finance Dashboard**

## Overview
- Tech Stack: FastAPI (Python), Expo (React Native), PostgreSQL, MongoDB
- AI: Rule-based FinBot + spaCy → Text-to-SQL → Tesseract OCR

## Getting Started
1. Clone repo & install dependencies
2. Setup `.env` variables
3. Run `docker-compose up` (Postgres + backend)
4. Start frontend with `npx expo start`

## Branching Strategy
- `main`, `develop`, `feature/*`, `release/*`, `hotfix/*`

## Contributing
1. Create feature branch from `develop`
2. Open a Pull Request targeting `develop`
3. Ensure CI checks pass

