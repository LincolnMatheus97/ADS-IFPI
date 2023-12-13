#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Lincoln_MatheusAPS.Models;

namespace Lincoln_MatheusAPS.Controllers
{
    public class PagamentoComCartaosController : Controller
    {
        private readonly MyDbContext _context;

        public PagamentoComCartaosController(MyDbContext context)
        {
            _context = context;
        }

        // GET: PagamentoComCartaos
        public async Task<IActionResult> Index()
        {
            if(TempData["SuccessMessage"] !=null)
            {
                ViewBag.SuccessMessage = TempData["SuccessMessage"];
            }
            else if(ViewData["ErrorMessage"] !=null)
            {
                ViewBag.ErrorMessage = TempData["ErrorMessage"];
            }

            return View(await _context.PagamentoComCartao.ToListAsync());
        }

        // GET: PagamentoComCartaos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCartao = await _context.PagamentoComCartao
                .FirstOrDefaultAsync(m => m.Idtp == id);
            if (pagamentoComCartao == null)
            {
                return NotFound();
            }

            return View(pagamentoComCartao);
        }

        // GET: PagamentoComCartaos/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: PagamentoComCartaos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("NumeroDoCartao,Bandeira,Idtp,NomeDoCobrador,InformacoesAdicionais,Discriminator")] PagamentoComCartao pagamentoComCartao)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Add(pagamentoComCartao);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Cartão criado com sucesso!";
                    return RedirectToAction(nameof(Create));
                }
                catch(Exception ex)
                {
                    Console.WriteLine($"Erro ao criar cartão: {ex.Message}");
                    TempData["ErrorMessage"] = "Erro ao criar Cartão.";
                    throw;
                }
            }
            return View(pagamentoComCartao);
        }

        // GET: PagamentoComCartaos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCartao = await _context.PagamentoComCartao.FindAsync(id);
            if (pagamentoComCartao == null)
            {
                return NotFound();
            }
            return View(pagamentoComCartao);
        }

        // POST: PagamentoComCartaos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("NumeroDoCartao,Bandeira,Idtp,NomeDoCobrador,InformacoesAdicionais,Discriminator")] PagamentoComCartao pagamentoComCartao)
        {
            if (id != pagamentoComCartao.Idtp)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pagamentoComCartao);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Dados editado com sucesso!";
                    return RedirectToAction(nameof(Edit), new{id});
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PagamentoComCartaoExists(pagamentoComCartao.Idtp))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return View(pagamentoComCartao);
        }

        // GET: PagamentoComCartaos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCartao = await _context.PagamentoComCartao
                .FirstOrDefaultAsync(m => m.Idtp == id);
            if (pagamentoComCartao == null)
            {
                return NotFound();
            }

            return View(pagamentoComCartao);
        }

        // POST: PagamentoComCartaos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var pagamentoComCartao = await _context.PagamentoComCartao.FindAsync(id);
                if (pagamentoComCartao == null)
                {
                    TempData["ErrorMessage"] = "Cartão não encontrado.";
                }
                else 
                {
                    _context.PagamentoComCartao.Remove(pagamentoComCartao);
                    await _context.SaveChangesAsync();
            
                    TempData["SuccessMessage"] = "Dados deletado com sucesso!";
                    TempData["DeletedClienteId"] = id;
                }

              return RedirectToAction(nameof(Index));
            }  
            catch(Exception ex)
            {
                TempData["ErrorMessage"] = $"Erro ao deletar dados: {ex.Message}";
                return RedirectToAction(nameof(Index));
            } 
        }

        private bool PagamentoComCartaoExists(int id)
        {
            return _context.PagamentoComCartao.Any(e => e.Idtp == id);
        }
    }
}
