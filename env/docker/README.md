```shell
# create buildx instance
$ docker buildx create --name multi-arch
# select instance
$ docker buildx use multi-arch
# bootstrap instace
$ docker buildx inspect --bootstrap
# build and push
$ ./build_and_push.sh
```