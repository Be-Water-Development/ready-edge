#!/bin/bash

# Start the application in default configuration.
#
# Yes, this is equivalent to `npm start`.

set -e

this_script_dir="$(cd "$(dirname "$0")" && pwd)"

echo $this_script_dir

###### Utilities from mppt100/ops/prelude.sh ###############
known_command() { command -v "$1" > /dev/null; }
# Convert argument to a Windows path when under other file system abstractions.
# Use where a Windows path is expected.
maybe_windows_path() {
    if known_command cygpath; then
        cygpath -w "$1"
    elif known_command wslpath; then
        wslpath -w "$1"
    else
        echo -n "$1"
    fi
}
############################################################
this_script_dir="$(maybe_windows_path "$this_script_dir")"

project_dir="$this_script_dir/"

node "$project_dir/server"

exit 0
