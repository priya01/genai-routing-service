# Cost-Optimized GenAI Orchestration Gateway

A production-ready AI query broker built using **Node.js, NestJS, and TypeScript**. This system intercepts incoming natural language text requests, integrating **LangChain framework layers** alongside **Semantic Caching mechanisms via Redis Stack** to minimize corporate upstream token expenditures.

## 🧠 Core System Design & Cost-Control Architecture

### 1. Semantic Database Lookup Filtering
To shield operational budgets from high-volume, repetitive customer queries, the application runs an upstream lookup check within an isolated Redis Stack database layer. Matching data points immediately bypass live LLM API execution boundaries, returning cached resolutions instantly with zero token fee impacts.

### 2. Resilient Error Handling & Fallbacks (Graceful Degradation)
To protect execution runtimes against network latency drops or model context timeout bottlenecks, the orchestration pipe wraps calls inside segregated async try-catch boundaries. If structural dependencies crash, baseline failure interceptors step in to emit clean deterministic replies seamlessly.

---

## 🚦 System Deployment & Running Blueprints

### 1. Initialize Redis Stack Matrix Components
Launch specialized memory database grids containing vector capabilities:
```bash
docker-compose up -d
```

### 2. Boot Application Service Engine
Install dynamic system dependencies and invoke the watch compiler environment:
```bash
npm install
npm run start:dev
```

### 3. Open Interactive Integration Interface
Test token saving queries metrics live directly via the browser layout dashboard:
* **Live Ingress URL:** [http://localhost:3001/api/docs](http://localhost:3001/api/docs)
