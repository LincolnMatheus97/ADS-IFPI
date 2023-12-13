using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class TipoDePagamento
    {
        [Key]
        [Display(Name = "Código do Tipo de Pagamento")]
        public int Idtp { get; set;}
        [Display(Name = "Nome do Pagante")]
        public string? NomeDoCobrador { get; set;}
        [Display(Name = "Dados Adicionais")]
        public string? InformacoesAdicionais { get; set;}
        public string? Discriminator { get; set;}

        public List<NotaDeVenda>? NotaDeVendas { get; set;}
    }
}