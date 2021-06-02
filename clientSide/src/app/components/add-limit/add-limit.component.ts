//  import { Component, OnInit } from '@angular/core';
// // import {Limit} from 'src/app/classes/limit' 
// // import { LimitService } from 'src/app/service/limit.service';
// // import { MenuItem } from 'primeng/api/menuitem';
// // import { AotCompiler } from '@angular/compiler';


//  @Component({
//   selector: 'app-add-limit',
//   templateUrl: './add-limit.component.html',
//   styleUrls: ['./add-limit.component.css']
//  })
// export class AddLimitComponent implements OnInit {

// //   codelimit:number;
// //   namelimit:string;
// //   lim:Limit;
// //   d:boolean;
// //   f:boolean;
// //   items: MenuItem[]=[];
// //   constructor(public limitService:LimitService) { }

//  //ngOnInit() {
// //     this.limitService.getAll(0).subscribe(
// //       data=>{     debugger;
// //   this.items=this.ConvertToMenuItem1(data)

// //   }
// //   )
// //   }
// //   ConvertToMenuItem1(data: Limit[],parentCode:number): MenuItem[] {
// //     let cat: MenuItem[] = [];
// //    let p=parentCode*(-1)
// //     if(data.length==0)
// //       return null;
// //       cat.push({command:this.check(),label:"add new",automationId:p})

// //     data.forEach(el => {
// //       if (el != null) {
// //         var c = this.limitService.getAll(el.CodeLimit).subscribe(data1 =>
// //           cat.push({ label: el.NameLimit, automationId: el.CodeLimit,command:(event)=>{this.chooselimit(el.CodeLimit)}, items: this.ConvertToMenuItem(data1,el.CodeLimit) }))
// //       }
// //     })
// //     return cat;
// //   }
// //   // ConvertToMenuItem1(data: Limit[]): MenuItem[] {
// //   //   let cat: MenuItem[] = [];

// //   //   if(data.length==0)
// //   //     return null;      
// //   //   data.forEach(el => {
// //   //     if (el != null) {
// //   //       var c = this.limitService.getAll(el.CodeLimit).subscribe(data1 =>
// //   //         // cat.push({ label: el.NameLimit, automationId: el.CodeLimit,command:(event)=>{this.chooselimit(el.CodeLimit)}, items: this.ConvertToMenuItem(data1) }))
// //   //     ) }
    
// //   //   })
// //   //   console.log(cat);
    
// //   //   return cat;
// //   // }
// //   check(): (event?: any) => void {
// //     alert("check!!!!")
// //       return;
// //   }
// //   chooselimit(automationId:number)
// //   {
// //     debugger;
// //     if(automationId<0)
// //       alert("adddd")
// //    else
// //       this.codelimit=automationId;
// //   debugger;
  
// //   }
  
// //   savelimit()
// //   {
// //     debugger;
// //     this.lim=new Limit();
// //     if(this.f==true)
// //     {
// //      this.lim.CodeParentLimit=0;
// //      this.lim.NameLimit=this.namelimit;
// //      this.f=false;
// //     }
// //    else
// //    {
// //     this.lim.CodeParentLimit=this.codelimit;
// //     this.lim.NameLimit=this.namelimit;
// //    }   
// //     this.limitService.AddLimit(this.lim).subscribe(data => { this.d = data })
// // };
// // father()
// // {
// // this.f=true;
// //}
