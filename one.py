# get all files from a directory
import os
import sys
import glob
import re
import time
import jsbeautifier;

# remove all extra space in files
def remove_extra_space(path):
    if os.path.exists(path):
        if os.path.isfile(path):
            with open(path, 'r') as f:
                lines = f.readlines()
                # remove \n from lines
                lines = [line.replace("\n", "") for line in lines]
                # remove extra space between lines
                lines = [line.strip() for line in lines]
            with open(path, 'w') as f:
                for line in lines:
                    f.write(line)


def text():
    remove_extra_space("./xs.js")

text()

# code pretify js files
def pretify_js(path):
    opts = jsbeautifier.default_options()
    opts.indent_size = 4
    opts.space_in_empty_paren = True
    # start comment from new line
    
    if os.path.exists(path):
        with open(path , 'r') as f:
            lines = f.readlines()
            res = jsbeautifier.beautify("".join(lines))
            res = jsbeautifier.beautify(res , opts) 
            with open(path, 'w') as f:
                f.write(res)

# pretify_js("./xs.js")


def get_files3(path):
    files = []
    for file in os.listdir(path):
        if os.path.isfile(os.path.join(path, file)):
            files.append(file)
    return files

# print(getinFolder("./node_modules"))


def remove_comments(file):
    try:
        with open(file, 'r') as f:
            lines = f.readlines()  # is causing error in a loop use better way
        with open(file, 'w') as f:
            for line in lines:
                if not re.match("^\s*//", line):
                    f.write(line)
    except:
        print("error in file: ", file)
        return False


def is_dir(folder):
    return os.path.isdir(folder)


def recursion(folder, stack):
    if is_dir(folder):
        for (file) in os.listdir(folder):
            recursion(os.path.join(folder, file), stack)
    else:
        stack.append(folder)


# remove all LICENSE files and README files
def remove_files(path):
    if os.path.exists(path):
        if os.path.isfile(path):
            file = path.split("/")[-1]
            # or file name == "LICENSE writtern
            if file.endswith(".md") or file == "LICENSE" or file == "README.md":
                os.remove(path)
                print("removed ===: ", path)


def get_files4(path):
    stack = []
    recursion(path, stack)

    while len(stack) > 0:
        time.sleep(0.005)
        file = stack.pop()
        #  if error in file continue to next file in stack
        try:
            # remove_files(file)
            remove_comments(file)
            remove_extra_space(file)
            print(file + " is done")
        except:
            print("error in file: ", file)
            continue


# print(get_files4("./node_modules"))

# print(get_files3("."))
