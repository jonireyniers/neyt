export type LocalizedStrings = {
  en: string;
  fr: string;
  nl: string;
};

export type Address = {
  lines?: string[];
  city?: string;
  postal?: string;
  country?: string;
};

export type Contact = {
  email?: string;
  phone?: string;
  website?: string;
};

export type Company = {
  names: LocalizedStrings;
  taglines?: LocalizedStrings;
  description?: Partial<LocalizedStrings>;
  address?: Address;
  contact?: Contact;
};

export type ClosingPeriod = {
  year: number;
  periods: string[];
};

export type CompanyData = {
  company: Company;
  closingDates?: ClosingPeriod[];
};