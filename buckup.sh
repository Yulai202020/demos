cd $1

rm -fr .stylelintrc.json bun.lockb .gitignore package.json tsconfig.json node_modules

mv src/* .

rm -fr src