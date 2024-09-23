import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
// import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {
  @ViewChild('title') title !: ElementRef
  @ViewChild('url') url !: ElementRef
  @ViewChild('headline') headline !: ElementRef
  @ViewChild('openmodal') openmodal!:ElementRef;
  @ViewChild('closemodal') closemodal!:ElementRef;
  hidecard = false;
  hidesearch = false;
  formcontrol = false;
  hidetitle = false;
  hideurl = false;
  cropper = false;
  loading = false;
  submitted = false;
  imageChangedEvent: any = '';
  croppedImage: any = '../../../assets/images/userprofile.png';
  file: any = []
  urlForm!: FormGroup;
  buttoncolorForm!:FormGroup;
  buttoncolor:string='#000000';

  showPreview = false;

  
  constructor(private fb: FormBuilder, private auth: AuthService, private sanitizer: DomSanitizer) { }
  // Validators.pattern("/(?<=^|[^\/])(@[A-Za-z0-9_.]{3,25})/gm")]
  ngOnInit(): void {
    this.urlForm = this.fb.group({
      url: ['', Validators.required]
    });
    this.buttoncolorForm = this.fb.group({
      buttoncolor:['']
    });
  }
  togglePreview() {
    this.showPreview = !this.showPreview;
  }
  cardtoggle() {
    this.hidecard = !this.hidecard;
  }
  searchtoggle() {
    this.hidesearch = !this.hidesearch
  }
  formcontroltoggle() {
    this.formcontrol = !this.formcontrol
    setTimeout(() => {
      this.headline.nativeElement.focus()
    });
  }
  titletoggle() {
    this.hidetitle = !this.hidetitle
    setTimeout(() => {
      this.title.nativeElement.focus()
    });
  }
  urltoggle() {
    this.hideurl = !this.hideurl
    setTimeout(() => {
      this.url.nativeElement.focus()
    });
  }

  fileChangeEvent(event: any): void {
    if(event.target.files.length>0){
      this.imageChangedEvent = event;
      setTimeout(() => {
        this.openmodal.nativeElement.click()
      });
    }
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    alert("Failed to show image")
  }

  afterCropped(){
    setTimeout(() => {
      this.closemodal.nativeElement.click()
    });
  }
  getcolorHex(e:any){
    this.buttoncolor = e.target.value;
    // console.log(this.buttoncolor)
  }
  jumpTo(){
    document.getElementById("custom")?.scrollIntoView({behavior:'smooth'})
  }
  submitUrl() {
    this.loading = true;
    this.submitted = true;
    if (this.urlForm.invalid) {
      this.loading = false;
      this.submitted = false;
    }
    else {
      this.auth.post('', this.urlForm.value).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.loading = false;
            this.submitted = false;
            console.log(this.urlForm.value)
          }
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
  }
}
