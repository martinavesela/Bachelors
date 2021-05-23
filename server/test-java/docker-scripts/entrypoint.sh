#!/usr/bin/env bash
mkdir tmp
cp mount/Main.java tmp
cp mount/Test.java tmp
cd tmp || exit
javac -cp "../junit.jar:." Main.java Test.java >> ../mount/compileout.txt 2>> ../mount/compileerr.txt
java -cp "../junit.jar:../hamcrest.jar:." org.junit.runner.JUnitCore Test >> ../mount/stdout.txt 2>> ../mount/stderr.txt
exit 0