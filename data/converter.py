import pandas as pd
import os
import glob

def convertFile(json, csv):
  df = pd.read_json(json)

  df.to_csv(csv, index = False)

  df = pd.read_csv(csv,usecols=["list_no", "participant","date", "stimType", "stimID", "prime", "prime_lex", "prime_cond", "primeKey.corr", "primeKey.rt", "target", "target_lex", "target_cond", "targetKey.corr", "targetKey.rt"])

  df = df[["list_no", "participant","date", "stimType", "stimID", "prime", "prime_lex", "prime_cond", "primeKey.corr", "primeKey.rt", "target", "target_lex", "target_cond", "targetKey.corr", "targetKey.rt"]]

  df.to_csv(csv, index=False)

dataFiles = glob.glob('**\*.json',recursive=True)

for file in dataFiles:
    filename = file.split("\\")[1].split("_pr")[0] + ".csv"
    print(filename)
    convertFile(file,filename)