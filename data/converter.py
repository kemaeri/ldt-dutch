import pandas as pd
import os
import glob

def convertFile(json, csv):
  df = pd.read_json(json)

  # Ensure the 'csv' folder exists within the function
  output_folder = 'csv'
  if not os.path.exists(output_folder):
    os.makedirs(output_folder)

  # Filter and reorder columns directly without saving intermediate CSV
  df = df[["list_no", "participant", "date", "stimType", "stimID", "prime", "prime_lex", "prime_cond", "primeKey.corr", "primeKey.rt", "target", "target_lex", "target_cond", "targetKey.corr", "targetKey.rt"]]

  # Save the final CSV to the 'csv' folder
  csv_filename = os.path.splitext(csv)[0] + '.csv'
  csv_path = os.path.join(output_folder, csv_filename)
  df.to_csv(csv_path, index=False)
