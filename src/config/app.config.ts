interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Store Manager'],
  tenantName: 'Vendor',
  applicationName: 'EcommPlus',
  addOns: [],
};
