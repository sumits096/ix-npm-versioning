import AutoMapper from "ts-automapper";
import { Customer, CustomerCreateRequest, CustomerResponse } from '../../core/entity';
import { CustomerCreateRequestModel, CustomerModel, CustomerResponseModel } from '../../core/models';

AutoMapper.create<Customer, CustomerModel>("customer")
.map(src => src.id, dst => dst.id)
.map(src => src.name, dst => dst.name)
.map(src => src.nameLegal, dst => dst.name_legal)
.map(src => src.street1, dst => dst.street_1)
.map(src => src.street2, dst => dst.street_2)
.map(src => src.city, dst => dst.city)
.map(src => src.state, dst => dst.state)
.map(src => src.zipcode, dst => dst.zipcode)
.map(src => src.email, dst => dst.email)
.map(src => src.phone, dst => dst.phone)
.map(src => src.externalId, dst => dst.external_id)
.map(src => src.industry, dst => dst.industry)
.map(src => src.status, dst => dst.status)
.map(src => src.created, dst => dst.created)
.map(src => src.latitude, dst => dst.latitude)
.map(src => src.longitude, dst => dst.longitude);

AutoMapper.create<CustomerModel, Customer>("customerModel")
.map(src => src.id, dst => dst.id)
.map(src => src.name, dst => dst.name)
.map(src => src.name_legal, dst => dst.nameLegal)
.map(src => src.street_1, dst => dst.street1)
.map(src => src.street_2, dst => dst.street2)
.map(src => src.city, dst => dst.city)
.map(src => src.state, dst => dst.state)
.map(src => src.zipcode, dst => dst.zipcode)
.map(src => src.email, dst => dst.email)
.map(src => src.phone, dst => dst.phone)
.map(src => src.external_id, dst => dst.externalId)
.map(src => src.industry, dst => dst.industry)
.map(src => src.status, dst => dst.status)
.map(src => src.created, dst => dst.created)
.map(src => src.latitude, dst => dst.latitude)
.map(src => src.longitude, dst => dst.longitude);

AutoMapper.create<CustomerCreateRequest, CustomerCreateRequestModel>("customerRequest")
.map(src => src.customer, dst => dst.customer)
.map(src => src.customerContact, dst => dst.customer_user)
.map(src => src.customerLocation, dst => dst.customer_location);

AutoMapper.create<CustomerResponse, CustomerResponseModel>("customerResponse")
.map(src => src.results, dst => dst.results);
