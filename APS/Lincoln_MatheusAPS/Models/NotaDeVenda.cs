using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class NotaDeVenda
    {
        [Key]
        [Display(Name = "Código da Nota")]
        public int Id { get; set;}
        [Display(Name = "Tipo")]
        public bool Tipo { get; set;}
        [Display(Name = "Data da Nota")]
        public DateTime Data { get; set;}


        [Display(Name = "Código do Cliente")]
        public int ClienteId { get; set;}
        public Cliente? Cliente { get; set;}
        [Display(Name = "Código do Vendedor")]
        public int Idv { get; set;}
        public Vendedor? Vendedor { get; set;}
        [Display(Name = "Código da Transportadora")]
        public int Idt { get; set;}
        public Transportadora? Transportadora { get; set;}
        [Display(Name = "Tipo de Pagamento")]
        public int Idtp { get; set;}
        public TipoDePagamento? TipoDePagamento { get; set;}
        public List<Item>? Items { get; set;}
        public List<Pagamento>? Pagamentos { get; set;}
        

        public bool Cancelar() 
        {
            return true;
        }
        public bool Devolver() 
        {
            return true;
        }
    }
}