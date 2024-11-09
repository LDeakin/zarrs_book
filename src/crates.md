# Crates

```mermaid
graph LR
    subgraph Core
        zarrs_metadata[zarrs_metadata <br> zarrs::metadata] --> zarrs
        zarrs_storage[zarrs_storage <br> zarrs::storage] --> zarrs
    end
    subgraph Stores
        direction LR
        zarrs_filesystem[zarrs_filesystem <br> zarrs::filesystem]
        zarrs_object_store
        zarrs_opendal
        zarrs_http
        zarrs_icechunk
        zarrs_zip
    end
    Stores --> zarrs_storage
    subgraph Bindings
        direction LR
        zarrs_ffi
        zarrs_python
    end
    zarrs --> Bindings
    subgraph CLI Tools
    zarrs --> zarrs_tools
    end
```

## Core Crates

### `zarrs` [![zarrs_ver]](https://crates.io/crates/zarrs) [![zarrs_doc]](https://docs.rs/zarrs) [![zarrs_repo]](https://github.com/LDeakin/zarrs)
[zarrs_ver]: https://img.shields.io/crates/v/zarrs
[zarrs_doc]: https://docs.rs/zarrs/badge.svg
[zarrs_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs-GitHub-blue?logo=github

The core library for manipulating Zarr hierarchies.

### `zarrs_metadata` [![zarrs_metadata_ver]](https://crates.io/crates/zarrs_metadata) [![zarrs_metadata_doc]](https://docs.rs/zarrs_metadata) [![zarrs_metadata_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_metadata)
[zarrs_metadata_ver]: https://img.shields.io/crates/v/zarrs_metadata
[zarrs_metadata_doc]: https://docs.rs/zarrs_metadata/badge.svg
[zarrs_metadata_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__metadata-GitHub-blue?logo=github

Provides Zarr V2 and V3 metadata serialisation and deserialisation.

If you are just interested in manipulating `Zarr` metadata, this crate may be useful to you.

> [!NOTE]
> This crate is re-exported in `zarrs` as `zarrs::metadata`.

### `zarrs_storage` [![zarrs_storage_ver]](https://crates.io/crates/zarrs_storage) [![zarrs_storage_doc]](https://docs.rs/zarrs_storage) [![zarrs_storage_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_storage)
[zarrs_storage_ver]: https://img.shields.io/crates/v/zarrs_storage
[zarrs_storage_doc]: https://docs.rs/zarrs_storage/badge.svg
[zarrs_storage_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__storage-GitHub-blue?logo=github

The storage API for `zarrs`.

Custom store implementations only need to depend on `zarrs_storage`.

> [!NOTE]
> This crate is re-exported in `zarrs` as `zarrs::storage`.

## Store Crates

### `zarrs_filesystem` [![zarrs_filesystem_ver]](https://crates.io/crates/zarrs_filesystem) [![zarrs_filesystem_doc]](https://docs.rs/zarrs_filesystem) [![zarrs_filesystem_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_filesystem)
[zarrs_filesystem_ver]: https://img.shields.io/crates/v/zarrs_filesystem
[zarrs_filesystem_doc]: https://docs.rs/zarrs_filesystem/badge.svg
[zarrs_filesystem_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__filesystem-GitHub-blue?logo=github

A filesystem store for the zarrs crate.

> [!NOTE]
> This crate is re-exported in `zarrs` as `zarrs::filesystem` if the `filesystem` feature is enabled.

### `zarrs_object_store` [![zarrs_object_store_ver]](https://crates.io/crates/zarrs_object_store) [![zarrs_object_store_doc]](https://docs.rs/zarrs_object_store) [![zarrs_object_store_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_object_store)
[zarrs_object_store_ver]: https://img.shields.io/crates/v/zarrs_object_store
[zarrs_object_store_doc]: https://docs.rs/zarrs_object_store/badge.svg
[zarrs_object_store_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__object__store-GitHub-blue?logo=github

[`object_store`](https://docs.rs/object_store/latest/object_store/) store support.

### `zarrs_opendal` [![zarrs_opendal_ver]](https://crates.io/crates/zarrs_opendal) [![zarrs_opendal_doc]](https://docs.rs/zarrs_opendal) [![zarrs_opendal_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_opendal)
[zarrs_opendal_ver]: https://img.shields.io/crates/v/zarrs_opendal
[zarrs_opendal_doc]: https://docs.rs/zarrs_opendal/badge.svg
[zarrs_opendal_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__opendal-GitHub-blue?logo=github

[`opendal`](https://docs.rs/opendal/latest/opendal/) store support.


### `zarrs_http` [![zarrs_http_ver]](https://crates.io/crates/zarrs_http) [![zarrs_http_doc]](https://docs.rs/zarrs_http) [![zarrs_http_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_http)
[zarrs_http_ver]: https://img.shields.io/crates/v/zarrs_http
[zarrs_http_doc]: https://docs.rs/zarrs_http/badge.svg
[zarrs_http_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__http-GitHub-blue?logo=github

A synchronous http store.


### `zarrs_zip` [![zarrs_zip_ver]](https://crates.io/crates/zarrs_zip) [![zarrs_zip_doc]](https://docs.rs/zarrs_zip) [![zarrs_zip_repo]](https://github.com/LDeakin/zarrs/tree/main/zarrs_zip)
[zarrs_zip_ver]: https://img.shields.io/crates/v/zarrs_zip
[zarrs_zip_doc]: https://docs.rs/zarrs_zip/badge.svg
[zarrs_zip_repo]: https://img.shields.io/badge/LDeakin/zarrs/zarrs__zip-GitHub-blue?logo=github

A storage adapter for zip files.

### `zarrs_icechunk` [![zarrs_icechunk_ver]](https://crates.io/crates/zarrs_icechunk) [![zarrs_icechunk_doc]](https://docs.rs/zarrs_icechunk) [![zarrs_icechunk_repo]](https://github.com/LDeakin/zarrs_icechunk)
[zarrs_icechunk_ver]: https://img.shields.io/crates/v/zarrs_icechunk
[zarrs_icechunk_doc]: https://docs.rs/zarrs_icechunk/badge.svg
[zarrs_icechunk_repo]: https://img.shields.io/badge/LDeakin/zarrs__icechunk-GitHub-blue?logo=github

[`icechunk`](https://docs.rs/icechunk/latest/icechunk/) store support.

## Bindings

### `zarrs_ffi` [![zarrs_ffi_ver]](https://crates.io/crates/zarrs_ffi) [![zarrs_ffi_doc]](https://docs.rs/zarrs_ffi) [![zarrs_ffi_repo]](https://github.com/LDeakin/zarrs_ffi)
[zarrs_ffi_ver]: https://img.shields.io/crates/v/zarrs_ffi
[zarrs_ffi_doc]: https://docs.rs/zarrs_ffi/badge.svg
[zarrs_ffi_repo]: https://img.shields.io/badge/LDeakin/zarrs__ffi-GitHub-blue?logo=github

A subset of `zarrs` exposed as a C/C++ API.

This crate is detailed in the [C/C++ Bindings](./zarrs_ffi.md) chapter.

### `zarrs-python` [![zarrs_python_ver]](https://crates.io/crates/zarrs_python) [![zarrs_python_doc]](https://docs.rs/zarrs_python) [![zarrs_python_repo]](https://github.com/ilan-gold/zarrs-python)
[zarrs_python_ver]: https://img.shields.io/crates/v/zarrs_python
[zarrs_python_doc]: https://docs.rs/zarrs_python/badge.svg
[zarrs_python_repo]: https://img.shields.io/badge/ilan--gold/zarrs--python-GitHub-blue?logo=github

A `CodecPipeline` for the `zarr` Python reference implementation that uses `zarrs`.

This crate is detailed in the [Python Bindings](./zarrs_python.md) chapter.

## CLI Tools

### `zarrs_tools` [![zarrs_tools_ver]](https://crates.io/crates/zarrs_tools) [![zarrs_tools_doc]](https://docs.rs/zarrs_tools) [![zarrs_tools_repo]](https://github.com/LDeakin/zarrs_tools)
[zarrs_tools_ver]: https://img.shields.io/crates/v/zarrs_tools
[zarrs_tools_doc]: https://docs.rs/zarrs_tools/badge.svg
[zarrs_tools_repo]: https://img.shields.io/badge/LDeakin/zarrs__tools-GitHub-blue?logo=github

Various tools for creating and manipulating Zarr v3 data with the `zarrs` rust crate.

This crate is detailed in the [zarrs_tools](./zarrs_tools.md) chapter.