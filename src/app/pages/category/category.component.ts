import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInfo} from '../../models/productInfo';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  title: string;
  page: any;
  
  public productInfo: ProductInfo[];

  ngOnInit() {
      this.productInfo=this.products;
      this.title="123";
  }

  ngOnDestroy(): void {
    
  }

  public products: ProductInfo[]= [{
    productId: 'B0002',
    productName: 'Spring In Action',
    productPrice: 20.00,
    productStock: 195,
    productDescription: 'Learn Spring',
    productIcon: 'https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL._SX397_BO1,204,203,200_.jpg',
    productStatus: 0,
    categoryType: 0,
    createTime: '2018-03-10T15:35:43.000+0000',
    updateTime: '2018-03-10T15:35:43.000+0000'
  },{
    productId: 'B0002',
    productName: 'Spring In Action',
    productPrice: 20.00,
    productStock: 195,
    productDescription: 'Learn Spring',
    productIcon: 'https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL._SX397_BO1,204,203,200_.jpg',
    productStatus: 0,
    categoryType: 0,
    createTime: '2018-03-10T15:35:43.000+0000',
    updateTime: '2018-03-10T15:35:43.000+0000'
  }];
}
