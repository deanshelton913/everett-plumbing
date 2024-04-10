"use client"
import ReCAPTCHA from "react-google-recaptcha"

export const ReCaptcha = ({handleChange}:{handleChange: any}) => (
    <ReCAPTCHA
          sitekey="6LewGbMpAAAAAKCTIQGZ2aB3rJnM3eKH-9KqgIPG"
          onChange={(data: any) => {
            handleChange({ target: { name: 'captchaResponse', value: data } } as any)
          }}/>
)