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
    public class PagamentoComChequesController : Controller
    {
        private readonly MyDbContext _context;

        public PagamentoComChequesController(MyDbContext context)
        {
            _context = context;
        }

        // GET: PagamentoComCheques
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
            return View(await _context.PagamentoComCheque.ToListAsync());
        }

        // GET: PagamentoComCheques/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCheque = await _context.PagamentoComCheque
                .FirstOrDefaultAsync(m => m.Idtp == id);
            if (pagamentoComCheque == null)
            {
                return NotFound();
            }

            return View(pagamentoComCheque);
        }

        // GET: PagamentoComCheques/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: PagamentoComCheques/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Banco,NomeDoBanco,Idtp,NomeDoCobrador,InformacoesAdicionais,Discriminator")] PagamentoComCheque pagamentoComCheque)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Add(pagamentoComCheque);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Cheque criado com sucesso!";
                    return RedirectToAction(nameof(Create));
                }
                catch(Exception ex)
                {
                    Console.WriteLine($"Erro ao criar cheque: {ex.Message}");
                    TempData["ErrorMessage"] = "Erro ao criar Cheque.";
                    throw;
                }
            }
            return View(pagamentoComCheque);
        }

        // GET: PagamentoComCheques/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCheque = await _context.PagamentoComCheque.FindAsync(id);
            if (pagamentoComCheque == null)
            {
                return NotFound();
            }
            return View(pagamentoComCheque);
        }

        // POST: PagamentoComCheques/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Banco,NomeDoBanco,Idtp,NomeDoCobrador,InformacoesAdicionais,Discriminator")] PagamentoComCheque pagamentoComCheque)
        {
            if (id != pagamentoComCheque.Idtp)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pagamentoComCheque);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Dados editado com sucesso!";
                    return RedirectToAction(nameof(Edit), new{id});
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PagamentoComChequeExists(pagamentoComCheque.Idtp))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return View(pagamentoComCheque);
        }

        // GET: PagamentoComCheques/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCheque = await _context.PagamentoComCheque
                .FirstOrDefaultAsync(m => m.Idtp == id);
            if (pagamentoComCheque == null)
            {
                return NotFound();
            }

            return View(pagamentoComCheque);
        }

        // POST: PagamentoComCheques/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var pagamentoComCheque = await _context.PagamentoComCheque.FindAsync(id);
                if (pagamentoComCheque == null)
                {
                    TempData["ErrorMessage"] = "Cheque não encontrado.";
                }
                else 
                {
                    _context.PagamentoComCheque.Remove(pagamentoComCheque);
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

        private bool PagamentoComChequeExists(int id)
        {
            return _context.PagamentoComCheque.Any(e => e.Idtp == id);
        }
    }
}
