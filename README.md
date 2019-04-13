# Solutions to Lab 1 - Sanjana Goli

## Answer A

wget -O scorecard.csv https://ed-public-download.app.cloud.gov/downloads/Most-Recent-Cohorts-Scorecard-Elements.csv

## Answer B

head -n1 scorecard.csv

## Answer C

grep “Dartmouth College” scorecard.csv

## Answer D

cut -d "," -f4,86 scorecard.csv

## Answer E

cut -d "," -f4,86 scorecard.csv |sort -t, -k2 -rn

## Answer F

cut -d "," -f4,86 scorecard.csv |sort -t, -k2 -rn | head -n10 | tr ',' '|' | sed 's/$/|/' | sed 's/^/|/'

| Institution | Size |
| ----------- | -----------: |
|University of Phoenix-Arizona|100011|
|Ivy Tech Community College|65092|
|Western Governors University|63961|
|Lone Star College System|59202|
|Houston Community College|56846|
|University of Central Florida|55113|
|Southern New Hampshire University|52216|
|Miami Dade College|50604|
|Texas A & M University-College Station|50416|
|Liberty University|46680|

