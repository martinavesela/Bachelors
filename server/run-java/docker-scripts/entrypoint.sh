#!/usr/bin/env bash
mkdir tmp
cp mount/Main.java tmp
cd tmp || exit
javac Main.java >> ../mount/stdout.txt 2>> ../mount/stderr.txt
java Main >> ../mount/stdout.txt 2>> ../mount/stderr.txt
