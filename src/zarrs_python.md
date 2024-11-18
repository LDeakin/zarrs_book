# Python Bindings (zarrs-python)

`zarrs-python` implements the `ZarrsCodecPipeline`.
It can be used by the reference [`zarr`](https://zarr.readthedocs.io/en/main/) Python implementation (v3.0.0+) for improved performance over the default `BatchedCodecPipeline`.

> [!WARNING]
> `zarrs-python` has some limitations compared to the reference implementation.
> See the [limitations](https://github.com/ilan-gold/zarrs-python?tab=readme-ov-file#limitations) in [![zarrs-python](https://img.shields.io/badge/ilan--gold/zarrs--python-GitHub-blue?logo=github)](https://github.com/ilan-gold/zarrs-python).

## Enabling `zarrs-python`

The `ZarrsCodecPipeline` is enabled as follows:

```python
from zarr import config
import zarrs # noqa: F401

config.set({"codec_pipeline.path": "zarrs.ZarrsCodecPipeline"})
```

> [!TIP]
> The `zarrs-python` bindings are located in a repository called `zarrs-python`, but the Python package is called `zarrs`.

Downstream libraries that use `zarr` internally ([`dask`](https://docs.dask.org/en/stable/index.html), [`xarray`](https://docs.xarray.dev/en/stable/), etc.) will also use the `ZarrsCodecPipeline`.