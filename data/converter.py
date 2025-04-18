import pandas as pd
import os
import glob
from osfclient.api import OSF
import configparser

# Read the .osfcli.config file
config = configparser.ConfigParser()
config_path = os.path.join(os.path.dirname(__file__), '.osfcli.config')
print(f"Config file path: {config_path}")
config.read(config_path)

def fetch_data_from_osf():
  # Connect to OSF with authorization for private projects
  osf = OSF(token = config['osf']['token'])
  project = osf.project(config['osf']['project'])
  storage = project.storage(config['osf']['storage'])

  # Check if there are any JSON files to fetch
  json_files = [file for file in storage.files if file.name.endswith('.json')]

  if json_files:
    os.makedirs('json', exist_ok=True)

    # Fetch all JSON files from the storage
    for file in json_files:
      file_path = os.path.join("json", file.name)
      with open(file_path, 'wb') as f:
        file.write_to(f)
    return True
  return False


def convertFile(json, csv):
  df = pd.read_json(json)

  # Ensure the 'csv' folder exists within the function
  os.makedirs('csv', exist_ok=True)

  # Filter and reorder columns directly without saving intermediate CSV
  df = df[["list_no", "participant", "date", "stimType", "stimID", "prime", "prime_lex", "prime_cond", "primeKey.corr", "primeKey.rt", "target", "target_lex", "target_cond", "targetKey.corr", "targetKey.rt"]]

  # Save the final CSV to the 'csv' folder
  csv_filename = os.path.splitext(csv)[0] + '.csv'
  csv_path = os.path.join("csv", csv_filename)
  df.to_csv(csv_path, index=False)

if __name__ == "__main__":
  # Fetch data from OSF
  data_fetched = fetch_data_from_osf()

  if not data_fetched:
    print("No JSON files found to fetch. Press Enter to exit.")
    input()
  else:
    # Convert all JSON files in the 'json' folder to CSV
    json_files = glob.glob('json/*.json')
    for json_file in json_files:
      convertFile(json_file, os.path.basename(json_file))
    
    print("All files were converted successfully. Press Enter to close the terminal.")
    input()
