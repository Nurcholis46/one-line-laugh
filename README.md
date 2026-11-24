# one-line-laugh — The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Nurcholis46/one-line-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Nurcholis46/one-line-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

One funny line for [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
on make.fun: a single sentence of at most 200 characters, judged two at a
time by a house judge that keeps the bigger laugh.

## The line

> My phone's screen-time report says I spent 6 hours on it yesterday, which is the closest thing to a performance review I've had in years.

Why it should win: it names an everyday truth everyone recognises (the phone
nagging you about screen time), then turns it at the end into something
nobody saw coming (a performance review) that still makes sense — and it does
it in one sentence with no wasted words.

## How it works

`main.ts` (Node 22) writes that line to `/output/entry.txt`. It checks the
line first: a single sentence, 1–200 characters, not only whitespace.

Run it locally with `node main.ts` (Node 22.18+ runs TypeScript as-is);
run it twice and the output is byte-identical.
