import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validateExpression } from 'src/app/Shared/name.validation';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  private contactForm!: AngularFirestoreCollection<any>;

  massageGroup:FormGroup;
  key:boolean=false;
  key2:boolean=false;
  msg:string='';
  constructor(private fb:FormBuilder ,private firestore:AngularFirestore ) { 
    this.massageGroup=this.fb.group({
      name:[ "" , [Validators.required , Validators.minLength(3) ,validateExpression(/[0-9]/)]],
      email:[ "" ,[Validators.required ,Validators.minLength(5), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
      message:["",[Validators.required ]]
  });}

  
  get f() { return this.massageGroup.controls; }
  
  openKey(){
    this.key=true
  }
  openKey2(){
    this.key2=true
  }
  
  submit(value:any){
    let form=value
    form.date=new Date()
    this.contactForm.add(form).then(res=>{
this.msg='Message Sent Successfully!'
    }).catch(err=>{
      
    })
    
  }
  
  
  ngOnInit(): void {
    this.contactForm=this.firestore.collection("message")
  }
}
