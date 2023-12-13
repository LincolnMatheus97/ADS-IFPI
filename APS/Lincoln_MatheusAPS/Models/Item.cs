using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Item
    {
        [Key]
        [Display(Name = "Código de Item")]
        public int IdI { get; set;}
        [Display(Name = "Preço do Item")]
        public double Preco { get; set;}
        [Display(Name = "Desconto Percentual")]
        public int Percentual { get; set;}
        [Display(Name = "Quantidade de Itens")]
        public int? Quantidade { get; set;}

        [Display(Name = "Código de Venda")]
        public int Id { get; set;}
        public NotaDeVenda? NotaDeVenda { get; set;}
        [Display(Name = "Código de Produto")]
        public  int IdPd { get; set;}
        public Produto? Produto { get; set;}
    }
}