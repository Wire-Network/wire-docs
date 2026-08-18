aws s3 sync ./build s3://wn-docs-dev --delete --profile wire-dev
aws cloudfront create-invalidation --distribution-id E3AKIG4YZUR9RX --paths '/*' --profile wire-dev