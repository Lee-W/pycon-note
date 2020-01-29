Title: 5 Steps to Build Python Native GUI Widgets for BeeWare
Date: 2020-01-29 11:32
Category: PyCon US 2019
Tags: GUI
Slug: 5-steps-to-build-python-native-GUI-widgets-for-BeeWare
Authors: Lee-W

## Speaker
Dan Yeaw

## Material
* [slide](https://dan.yeaw.me/slides/gui-widget-for-beeware/#/)
* [article](https://dan.yeaw.me/posts/gui-widget-for-beeware/)
* [video](https://www.youtube.com/watch?v=sWt_sEZUiY8)

## Note
* [toga](https://github.com/beeware/toga)
    * [Rubicon](https://github.com/beeware/rubicon-objc)
        * Python -> Objective C
    * [VOC](https://github.com/beeware/voc)
        * Python -> Java
    * [Batavia](https://github.com/beeware/batavia)
        * Python -> Java Script
* **Step 0**: Development Platform
    * macOS and GTK are the most developed
* **Step 1**: Research Your Widget
* **Step 2**: Write Docs
    * Write API documentation first
    * Document Driven Development
* **Step 3**: Implement TOGA_CORE (with TDD)
* **Step 4**: Implement TOGA_IMPL (Dummy Backend)
    * Dummy is for automatic testing without a native platform
* **Step 5**: Implement TOGA_IMPL (Your platform)
