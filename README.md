# indra_backend
reto tecnico
# deploy
sam deploy --template-file template.yaml --stack-name indra-backend --capabilities CAPABILITY_IAM --s3-bucket fernet-indra-lambda
# pruebas
ingresar a https://editor.swagger.io/ copiar el codigo de swagger.yaml y probar