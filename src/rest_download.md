# 📦 REST Container Downloads

[← Back to Igor's Lab Homepage](./index.md)

**Workshop Edition - November 2025**

---

## 🚀 About REST

**REST** (Rust-based Electronic Structure Theory) is the world's first electronic structure package built entirely in Rust, developed by our research group. This page provides containerized versions of REST for easy deployment.

**Note**: For source code, compilation instructions, and detailed usage documentation, please visit our main repository:
👉 **[gitee.com/restgroup](https://gitee.com/restgroup)**

---

## 📋 Current Version: v2025.01

**Release Information:**
- **Version**: 2025.01 (Workshop Edition)
- **Release Date**: November 28, 2025
- **Workshop**: 2nd REST Workshop @ Fudan University (2025 November 29-30)
- **Storage**: Hosted on Alibaba Cloud OSS
- **Source Code**: [gitee.com/restgroup/rest](https://gitee.com/restgroup/rest)

---

## ⬇️ Download Links and Counts

### Docker Container Image
- **Filename**: `rest_2025.01.tar.gz`
- **Size**: ~1.6 GB
- **Format**: Docker image archive (.tar.gz)
- **Download**: [rest_2025.01.tar.gz](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_2025.01.tar.gz)

### Apptainer (Singularity) Container Image
- **Filename**: `rest_2025.01.sif`
- **Size**: ~1.6 GB
- **Format**: Singularity/Apptainer container (.sif)
- **Download**: [rest_2025.01.sif](https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_2025.01.sif)

### Conda
![](https://anaconda.org/restgroup/rest/badges/latest_release_date.svg) 
![](https://anaconda.org/restgroup/rest/badges/downloads.svg)

---

## 🔧 Quick Installation Commands

### Conda Installation
```bash
conda create -n rest python=3.11 -c conda-forge
conda activate rest
conda install rest -c restgroup -c mokit -c conda-forge
```

### Docker Installation
```bash
# Download and load Docker image
wget -O rest_2025.01.tar.gz "https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/docker/rest_2025.01.tar.gz"
docker load < rest_2025.01.tar.gz
```

### Apptainer/Singularity Installation
```bash
# Download Apptainer container
wget -O rest_2025.01.sif "https://rest-package-image.oss-cn-hangzhou.aliyuncs.com/apptainer/rest_2025.01.sif"
singularity exec rest_2025.01.sif rest --version
```

## 📚 Documentation & Support

**For detailed documentation, tutorials, and source code:**

🔗 **[Main Repository: gitee.com/restgroup](https://gitee.com/restgroup)**

**Quick Links:**
- 📖 [REST Documentation](https://gitee.com/restgroup/rest/blob/master/README.md)
- 🐛 [Issue Tracker](https://gitee.com/restgroup/rest/issues)
- 📧 [Contact](mailto:igor1982@gitee.com)

---

## 🤝 Citation

If you use REST in your research, please cite:

> Zhiyun Li, Tianyi Gao, Shirong Wang, Sheng Bi, Rulin Feng, Zhenyu Zhu, Yilin Zhao, Wenjie Yan, Lingyue Yu, Qirui Gao, Zihan Lin, Jianming Wu, Igor Ying Zhang, Xin Xu. REST: Embracing the Rust Programming Language for Modern Electronic Structure Theory†[J].  *Chinese Journal of Chemical Physics* . DOI: 10.1063/1674-0068/cjcp2510156

*This is a download-only page. For complete documentation, visit gitee.com/restgroup*

[← Back to Igor's Lab Homepage](./index.md)

Last Updated: December 10, 2025

