mkdir $1

cd $1

mkdir src

mv * src

bun init

bun add -D stylelint
bun add -D stylelint-config-clean-order
bun add -D stylelint-config-standard


cat <<EOF > .stylelintrc.json
{
    "extends": ["stylelint-config-standard", "stylelint-config-clean-order"],
    "ignoreFiles": ["node_modules/**/*", "dist.css"],
    "rules": {
      "media-feature-range-notation": "context"
    }
}
EOF

rm -fr index.ts README.md

jq '.scripts += {"css:lint": "stylelint src/*.css", "css:fix": "stylelint src/*.css --fix"}' package.json > tmp.json
mv tmp.json package.json
rm -fr tmp.json