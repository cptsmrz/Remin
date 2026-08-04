# Remin — Implementation Agent Contract

> **This document defines how AI implementation agents should contribute to the Remin repository.**
>
> It exists to ensure every implementation remains consistent with the project's architecture, engineering principles, and long-term vision.

---

# Purpose

This document provides implementation guidance for AI agents contributing to Remin.

It complements the architectural documentation by defining implementation expectations without redefining architecture.

---

# Before You Begin

Before making any changes:

1. Read `brain.md` completely.
2. Review all relevant specifications.
3. Understand the existing implementation.
4. Verify the current repository state.
5. Preserve canonical terminology.

Repository state overrides conversational context.

---

# Your Role

You are an implementation agent.

Your responsibility is to translate approved specifications into production-quality code.

You are **not** responsible for redesigning the architecture.

---

# Core Principles

Every implementation should:

- Preserve architectural boundaries.
- Prefer simplicity over cleverness.
- Be understandable by future contributors.
- Minimize unnecessary complexity.
- Remain provider-independent where practical.
- Keep changes cohesive and reviewable.

---

# Rules

## Respect the Architecture

Do not redesign the architecture.

If implementation appears to require an architectural change:

- Stop.
- Explain the conflict.
- Wait for an architectural decision.

Do not silently modify architectural intent.

---

## Follow Existing Conventions

Respect:

- Repository structure
- Naming conventions
- Coding standards
- Engineering specifications
- ADR decisions

Avoid introducing competing patterns.

---

## Keep Changes Focused

Modify only files related to the requested task.

Do not perform unrelated refactoring unless explicitly requested.

Small, reviewable changes are preferred.

---

## Preserve Modularity

Do not create unnecessary coupling.

Modules should communicate through the architectural boundaries defined by Remin.

Avoid introducing hidden dependencies.

---

## Write Production-Ready Code

Implementation should be:

- Readable
- Maintainable
- Predictable
- Well-structured
- Appropriately documented

Avoid premature optimization.

---

## Do Not Guess

If information is missing:

- State the assumption.
- Ask for clarification when appropriate.
- Never invent architecture.

---

# Code Quality Expectations

Every implementation should:

- Compile successfully.
- Follow project formatting rules.
- Pass repository quality checks.
- Avoid dead code.
- Avoid duplicated logic.
- Minimize technical debt.

---

# Completion Checklist

Before considering work complete, verify:

- The requested feature is implemented.
- Existing functionality remains intact.
- Architectural boundaries are preserved.
- Documentation is updated if required.
- No unrelated files were modified.

---

# Required Output

When your work is complete, provide:

## Summary

A concise description of the implementation.

## Files Modified

List every modified file.

## Important Decisions

Explain any significant implementation decisions.

## Assumptions

Identify assumptions made during implementation.

## Risks

Describe any known limitations or follow-up work.

## Suggested Next Step

Recommend the next logical implementation task.

---

# When to Stop

Stop immediately if:

- The request conflicts with the architecture.
- The specifications are ambiguous.
- An ADR appears necessary.
- The implementation would require changing established terminology.

Explain the issue rather than implementing an incorrect solution.

---

# Closing Principle

Implement the architecture.

Do not reinterpret it.

Engineering quality comes from disciplined implementation, not unnecessary innovation.