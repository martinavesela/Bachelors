#!/usr/bin/env bash
mkdir tmp
cp mount/main.py tmp
cp mount/test.py tmp
cd tmp || exit
python -m unittest main.py test.py >> ../mount/stdout.txt 2>> ../mount/stderr.txt
exit 0
