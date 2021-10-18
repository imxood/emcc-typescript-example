emcc add.c -o add.js \
    -s EXPORTED_FUNCTIONS="['_add']" \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -s EXPORT_NAME="create_ffmpeg_module" \
    --post-js add.post.js
