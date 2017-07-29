DEST=$1

ssh $DEST <<'ENDSSH'
    cd swanstwo

    ###
    ### Forcibly get whatever is in origin/master
    ###
    git checkout master
    git fetch --all
    git reset --hard origin/master

    ###
    ### Build the container before switching
    ###
    npm install
    gulp
    docker build -t swanstwo .

    ###
    ### Stop the current container and restart
    ###
    docker stop swanstwo-prod
    docker rm swanstwo-prod
    docker run -d -p 80:80 --name swanstwo-prod swanstwo

ENDSSH
