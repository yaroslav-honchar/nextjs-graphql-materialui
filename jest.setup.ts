import * as nextIntl from "next-intl"
import { createTranslator } from "next-intl"
import translatesEn from "@/_app/localization/translates/en.json"
import "@testing-library/jest-dom"

jest.spyOn(nextIntl, "useTranslations").mockImplementation((namespace: string) => {
  return createTranslator({ locale: "en", messages: translatesEn, namespace })
})
