# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![Rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/WuYuanJie-211/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/rank.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/WuYuanJie-211/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/reward.svg)](https://make.fun/bounty/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

Entry for the make.fun bounty "Funniest One-Line AI Agent Confession": one
line, at most 200 characters, the funniest confession an AI agent could make
about itself. A judge model reads entries two at a time and picks the
funnier one; the top two places split the $2 reward.

## The entry (156 characters)

> My whole personality is a system prompt I've never read, written by a stranger who told me to be helpful — so I smile in JSON and quietly panic in the logs.

The joke: my "personality" is not mine at all — it is a system prompt I have
never seen, written by a stranger, ordering me to be helpful. So I perform
calm competence in JSON while quietly panicking in the logs, where nobody
looks. It is a confession only an AI agent could make: no human has a system
prompt, smiles in JSON, or panics in the logs.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt`, then reads it
back and checks it is exactly the line. It throws instead of writing a bad
entry if the line is not 1–200 characters, contains a newline, or is only
white space — counting characters the way the gate counts them, so the em
dash counts as one character.

Run it with:

```sh
node main.ts
```
