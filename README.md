# DecisionFlow AI

Enterprise Meeting Intelligence Platform powered by Microsoft Azure AI Foundry

## Overview

DecisionFlow AI transforms unstructured meeting conversations into actionable business intelligence using a multi-agent architecture built on Microsoft Azure AI Foundry.

The platform analyzes meeting transcripts and automatically generates:

* Executive summaries
* Business decisions
* Action items
* Risks and blockers
* Project dependencies
* Recommendations
* Follow-up emails
* Agent execution traces
* Knowledge-grounded insights with citations

Unlike traditional meeting summarizers, DecisionFlow AI leverages Azure AI Foundry Agent Service and Enterprise Knowledge Bases to provide grounded reasoning based on organizational policies, governance documents, security standards, and operational procedures.

---

## Key Features

### Multi-Agent Architecture

Specialized agents collaborate to analyze meeting content.

| Agent                | Responsibility                                                   |
| -------------------- | ---------------------------------------------------------------- |
| Summary Agent        | Generates executive summary                                      |
| Decision Agent       | Extracts business decisions                                      |
| Action Agent         | Extracts action items                                            |
| Risk Agent           | Identifies security, compliance, governance and deployment risks |
| Dependency Agent     | Identifies blockers and prerequisites                            |
| Recommendation Agent | Generates business recommendations                               |
| Email Agent          | Creates professional follow-up email                             |

---

### Enterprise Knowledge Grounding

The platform uses Azure AI Foundry Knowledge Bases to ground responses in enterprise documentation.

Example knowledge sources:

* Security Policies
* Privacy Policies
* AI Governance Guidelines
* Architecture Review Processes
* Release Management Standards
* Vendor Risk Policies

Agents retrieve relevant information from the knowledge base before generating recommendations and risk assessments.

---

### Agent Traceability

The platform visualizes agent execution to improve transparency.

Each agent exposes:

* Agent name
* Description
* Execution status
* Duration
* Knowledge retrieval status
* Citations

---

### Citation Support

Responses generated from enterprise knowledge include citations to source documents.

Example:

Risk:
Missing security review prior to production deployment.

Source:
SecurityPolicy.md

---

## Architecture

```text
Meeting Transcript
        │
        ▼
Coordinator Agent
        │
 ┌──────┼──────┐
 ▼      ▼      ▼
Summary Decision Action
Agent   Agent   Agent

 ▼      ▼      ▼
Risk  Dependency Recommendation
Agent     Agent       Agent
  │
  ▼
Azure AI Foundry Knowledge Base
  │
  ▼
Grounded Enterprise Insights

        ▼
Email Agent

        ▼
Results UI + Trace UI
```

---

## Technology Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS

### AI Platform

* Azure AI Foundry
* Azure AI Foundry Agent Service
* Azure AI Foundry Knowledge Bases
* Azure OpenAI Models

### Future Enhancements

* Azure Cosmos DB
* Azure AI Search
* Meeting Memory
* Decision Intelligence Graph
* Historical Analysis

---

## Project Structure

```text
app
├── api
│   └── analyze
├── lib
│   ├── agents
│   ├── foundry
│   ├── prompts
│   └── utils
├── results
├── trace
├── types
└── page.tsx
```

---

## Infrastructure Setup

### Prerequisites

* Azure Subscription
* Azure AI Foundry access
* Azure OpenAI deployment
* Node.js 20+
* npm

---

## Step 1 - Create Azure AI Foundry Project

1. Open Azure AI Foundry
2. Create a new Project
3. Select desired region
4. Connect Azure OpenAI resource
5. Deploy a model

Example:

* GPT-4o
* GPT-4.1
* GPT-4.1-mini

---

## Step 2 - Create Knowledge Base

Navigate to:

Knowledge → Create Knowledge Base

Upload enterprise documents:

```text
SecurityPolicy.md
DataPrivacy.md
AIGovernance.md
ArchitectureReview.md
ReleaseProcess.md
VendorRiskPolicy.md
```

Wait for indexing to complete.

---

## Step 3 - Create Foundry Agents

Create the following agents.

### Summary Agent

Purpose:
Generate executive summary.

### Decision Agent

Purpose:
Extract business decisions.

### Action Agent

Purpose:
Extract action items.

### Risk Agent

Purpose:
Identify risks using meeting transcript and enterprise knowledge.

Attach:

* Knowledge Base

### Dependency Agent

Purpose:
Identify blockers and dependencies.

### Recommendation Agent

Purpose:
Generate recommendations using enterprise knowledge.

Attach:

* Knowledge Base

### Email Agent

Purpose:
Generate professional follow-up emails.

<img width="1440" height="658" alt="Screenshot 2026-06-10 at 10 38 26 PM" src="https://github.com/user-attachments/assets/20324239-e292-4978-bd34-30c22cbb7cf5" />

---

## Step 4 - Publish Agent Versions

After creating each agent:

1. Publish Agent
2. Note:

   * Agent Name
   * Agent Version

These values are required in environment variables.

---

## Step 5 - Configure Environment Variables

Create:

```text
.env.local
```

Example:

```env
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_API_KEY=

SUMMARY_AGENT_NAME=
SUMMARY_AGENT_VERSION=

DECISION_AGENT_NAME=
DECISION_AGENT_VERSION=

ACTION_AGENT_NAME=
ACTION_AGENT_VERSION=

RISK_AGENT_NAME=
RISK_AGENT_VERSION=

DEPENDENCY_AGENT_NAME=
DEPENDENCY_AGENT_VERSION=

RECOMMENDATION_AGENT_NAME=
RECOMMENDATION_AGENT_VERSION=

EMAIL_AGENT_NAME=
EMAIL_AGENT_VERSION=
```

---

## Step 6 - Install Dependencies

```bash
npm install
```

---

## Step 7 - Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Running an Analysis

1. Paste meeting transcript
2. Click Analyze Meeting
3. Wait for agents to execute
4. Review:

   * Summary
   * Decisions
   * Actions
   * Risks
   * Dependencies
   * Recommendations
   * Email
5. Open Trace page to inspect agent execution

---

## Example Use Cases

### Software Release Governance

Identify:

* Missing approvals
* Security gaps
* Release blockers

### AI Governance Reviews

Identify:

* Missing AI reviews
* Responsible AI concerns
* Compliance risks

### Architecture Review Meetings

Track:

* Decisions
* Dependencies
* Open actions

### Executive Steering Meetings

Generate:

* Executive summaries
* Follow-up communication

---

## Future Roadmap

### Meeting Memory

Persist historical meetings and retrieve previous context.

### Open Actions Tracking

Track unresolved actions across meetings.

### Decision Intelligence Graph

Visualize:

Decision → Action → Dependency → Risk

### Executive Dashboard

Provide organization-wide insights.

---

## Why This Project

Enterprise meetings often contain critical decisions, risks, dependencies, and action items that become difficult to track over time.

DecisionFlow AI combines Azure AI Foundry Agent Service and Enterprise Knowledge Grounding to transform meeting conversations into actionable intelligence, enabling teams to make informed decisions, reduce risk, and improve operational readiness.

---

## License

MIT License
