Title: Improving PyPI's security with Two Factor Authentication
Date: 2019-12-31 12:13
Category: PyGotham 2019
Tags: security
Slug: improving-pypi-s-security-with-two-factor-authentication
Authors: Lee-W

## Speaker
William Woodruff

## Material
* [video](https://www.youtube.com/watch?v=xNZIxt-ABUs)

## Note
* PyPI now supports two factor authentication
* Two factor authentication
    * First factor: your password or something you know
    * Second Factor: something that you (and only you) have
* Why 2FA?
    * Adding a second factor prevents/mitigates data leak
        * but 2FA isn't panacea
* 2 FA methods
    * SMS/voice **Don't use it**
        * Problem: Nothing about the phone network is secure
            * e.g., SS7 attacks, SIM ports & jacking, SMS interception
        * do not use it in new service
    * HOTP-based physical keys
        * Special device
        * high cost
    * TOTP (Time-based one-time passwords ): your baseline 2FA
        * Symmetric cryptography with a single shared secret
        * design suggestion
            * do:
                * require users to enter a TOTP code
                * provide both a provisioning URI and a QR code
            * don't
                * use uncommon TOTP parameters (bad client support)
                * nag users for TOTP codes on every single action
    * WebAuthn (U2F)
        * Asymmetric, public-key crpyography
        * Hardware agnostic
        * Supported by most browser (W3C standard)
        * design suggestion
            * do
                * allow anonymous attestation (ECDAA) (e.g., TouchID)
                * support multiple WebAuthn keys per user
                * force user to tag/label their keys
            * don't
                * make users choose between TOTP and WebAuthn → Let them do both
                * use us2.js or any other pre-WebAuthn lib
* Conclusion
    * You should add 2FA to your services and phasing out SMS 2FA
    * TOTP
        * [pyca/crptography](https://github.com/pyca/cryptography)
    * WebAuthn
        * [Py_webauthn](https://github.com/duo-labs/py_webauthn) is a little rough, but production ready  
