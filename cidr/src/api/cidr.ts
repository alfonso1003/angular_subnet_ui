export interface ICidr {
    ip_address: String;
    ip_range: String;
    subnet_mask: String;
    ip_quantity: Number;
    hostname: String;
}
export interface ICidrData {
    ip_class: string;
    isShowDetails?: boolean;
    cidr_info: ICidr[];
}
