mkdir $1

cd $1

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