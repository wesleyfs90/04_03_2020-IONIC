import { ArtigoService } from './../artigo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artigo } from 'src/app/Model/artigo';

@Component({
  selector: 'app-artigo-detalhe',
  templateUrl: './artigo-detalhe.page.html',
  styleUrls: ['./artigo-detalhe.page.scss'],
})
export class ArtigoDetalhePage implements OnInit {
  artigo: Artigo = new Artigo();

  constructor(private serviceArtigo: ArtigoService,
              private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.artigo = this.serviceArtigo.getById(parseInt(id));
    }
  }

}
