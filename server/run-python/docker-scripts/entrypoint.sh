#!/usr/bin/env bash
mkdir tmp
cp mount/main.py tmp
cd tmp || exit
python main.py >> ../mount/stdout.txt 2>> ../mount/stderr.txt

