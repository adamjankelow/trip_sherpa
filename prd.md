# Trip Sherpa Web App — Product Requirements Doc

## 1. Purpose

Build a minimal, AI‑powered travel‑planning web app where users enter basic trip preferences and receive a day‑by‑day itinerary.

## 2. Goals & Success Metrics

| Goal                              | Metric                                |
| --------------------------------- | ------------------------------------- |
| Generate usable itinerary in <5 s | 95% requests under SLA                |
| User satisfaction                 | Avg ≥4/5 rating in pilot              |
| Code quality                      | >80% unit‑test coverage; ESLint clean |

## 3. Core User Flow

1. **Landing Page** → trip form (destination, days, vibe)
2. **Submit** → POST `/api/plan`
3. **Planner Service** → call LLM, enrich with POI data
4. **Return JSON** itinerary
5. **Display** pretty itinerary; allow export (PDF / copy)

## 4. Tech Stack

- **Frontend**: Next.js (React 18, App Router), TypeScript, Tailwind
- **Backend (edge)**: Next.js API routes
- **AI layer**: OpenAI API (GPT‑4o) via server call
- **Data**: Static POI DB (JSON), option to pull live APIs later
- **CI/CD**: GitHub Actions; deploy to Vercel

## 5. High‑Level Architecture

```text
Browser ─▶ Next.js Page ─▶ /api/plan ─▶ Planner (LLM + helpers) ─▶ Response ─▶ UI render
```

## 6. Feature Backlog & Tasks

### Phase 1 — MVP

-

### Phase 2 — AI Integration

-

### Phase 3 — UX Polish

-

### Phase 4 — Data Enrichment

-

## 7. Non‑Functional Requirements

- Type safety end‑to‑end (TS types shared between UI & API route)
- Accessibility: AA contrast, keyboard nav
- Secrets via Vercel env vars, never in repo

## 8. Milestones & Timeline *(tentative)*

| Date     | Deliverable             |
| -------- | ----------------------- |
|  Week 1  | MVP form + stub planner |
|  Week 2  | OpenAI integration live |
|  Week 3  | Styling, loading states |
|  Week 4  | Pilot test + feedback   |

## 9. Open Questions

- Which POI/source for activities? (Google vs local JSON)
- Multi‑destination trip support?
- Auth or leave anonymous?

## 10. References

- Next.js docs
- OpenAI function‑calling examples
- Tailwind UI patterns

