echo "Starting $NODE_ENV Server -> "

case $NODE_ENV in
    development )
        yarn dev
        ;;
    * )
        yarn start
        ;;
esac