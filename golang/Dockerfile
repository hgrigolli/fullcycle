FROM golang:alpine AS builder

COPY /src /go/src/

WORKDIR /go/src/

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/hello

FROM scratch

COPY --from=builder /go/bin/hello /go/bin/hello

ENTRYPOINT [ "/go/bin/hello" ]



