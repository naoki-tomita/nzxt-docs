docker buildx build ../../ -f Dockerfile --platform linux/arm64  -t ghcr.io/naoki-tomita/nzxt-docs:latest-arm --push
docker buildx build ../../ -f Dockerfile --platform linux/amd64  -t ghcr.io/naoki-tomita/nzxt-docs:latest --push
